const labelService = require('../service/label.service')

const verifyLabelExists = async (ctx, next) => {
  console.log('验证标签是否存在的middleware');
  
  const { labels } = ctx.request.body;
  

  let newLabels = [];
  for(let name of labels) {
    const labelResult = await labelService.getLabelByname(name);
    const label = { name };
    if (!labelResult) {
      const result = await labelService.create(name);
      label.id = result.insertId;
    } else {
      label.id = labelResult.id;
    }
    newLabels.push(lable);
  }

  ctx.labels = newLabels;

  await next();

}

module.exports = {
  verifyLabelExists
}