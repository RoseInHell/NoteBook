window.addEventListener(`load`, function ()
{
  // 数组信息
  let studentsData = [
  {
    id: 1,
    name: "汪印星",
    age: "24",
    gender: "男"
  },
  {
    id: 2,
    name: "李寅峰",
    age: "22",
    gender: "男"
  },
  {
    id: 3,
    name: "钟鑫茂",
    age: "22",
    gender: "女"
  },
  {
    id: 4,
    name: "张胜江",
    age: "24",
    gender: "男"
  },
  {
    id: 5,
    name: "徐阳",
    age: "25",
    gender: "男"
  },
  {
    id: 6,
    name: "杨烨",
    age: "26",
    gender: "男"
  },
  {
    id: 7,
    name: "杨恩",
    age: "25",
    gender: "女"
  },
  {
    id: 8,
    name: "夏琪琦",
    age: "22",
    gender: "女"
  },
  {
    id: 9,
    name: "罗雷",
    age: "26",
    gender: "男"
  },
  {
    id: 10,
    name: "陈阳吉",
    age: "22",
    gender: "男"
  }, ];
// 渲染数据初始化
  function init(arr = studentsData, a = 0)
  {
    let tbody = document.getElementsByTagName(`tbody`)[0];
    if (a < 1)
    {
      tbody.innerHTML = "";
    }
    for (let i = 0; i < arr.length; i++)
    {
      let tr = document.createElement(`tr`);
      tr.innerHTML = ` <td>${arr[i].id}</td>` + `<td>${arr[i].name}</td>` + `<td>${arr[i].age}</td>` + `<td>${arr[i].gender}</td>` + `<td> <button data-x=${i} class="btn04">修改</button>
                    <button data-s=${i} class="btn05">删除</button></td>`;
      tbody.appendChild(tr);
    }
  }
  init();
  // 保存点击修改学生的索引
  let changIndex;
  // 清楚样式
  function removeStyle()
  {
    let li = document.getElementsByTagName(`li`);
    let div = document.getElementsByTagName(`div`);
    for (let i = 0; i < li.length; i++)
    {
      li[i].style.color = ` #2C817E`;
      li[i].style.backgroundColor = `#1C4846`;
    }
    for (let j = 0; j < div.length; j++)
    {
      div[j].style.border = `none`;
    }
  }
// 增加样式
  function addStyle(is, it)
  {
    is.style.backgroundColor = `#2E807D`;
    is.style.color = `#FEFCFF`;
    it.style.border = `2px solid #115253`;
  }
// 清楚输入框文字
  function clearInput()
  {
    let name1 = document.getElementById(`name1`);
    let age1 = document.getElementById(`age1`);
    let name = document.getElementById(`name`);
    let age = document.getElementById(`age`);
    let change1 = document.getElementsByClassName(`change1`);
    let add1 = document.getElementsByClassName(`add1`);
    let btn02 = document.getElementById(`btn02`);
    name.value = "";
    age.value = "";
    name1.value = "";
    age1.value = "";
    for (let i = 0; i < change1.length; i++)
    {
      change1[i].checked = false;
      add1[i].checked = false;
    }
    btn02.disabled = true;
  }
  let activeDiv = document.getElementsByClassName(`active`)[0];
// 获取数组对应值的索引
  function findall(a, x)
  {
    let results = [],
      len = a.length,
      pos = 0;
    while (pos < len)
    {
      pos = a.indexOf(`${x}`, pos);
      if (pos === -1)
      {
        //未找到就退出循环完成搜索
        break;
      }
      results.push(pos); //找到就存储索引
      pos += 1; //并从下个位置开始搜索
    }
    return results;
  }
  // 事件代理
  activeDiv.addEventListener(`click`, function (event)
  {
    event = event || window.event;
    // 根据选项卡判断
    if (event.target.id == `add` || event.target.className == `add-student`)
    {
      removeStyle();
      clearInput();
      let add = document.getElementById(`add`);
      let studentList = document.getElementsByClassName(`add-student`)[0];
      addStyle(add, studentList);
    }
    else if (event.target.id == `s-list` || event.target.className == `student-list`)
    {
      removeStyle();
      clearInput();
      init();
      let sList = document.getElementById(`s-list`);
      let studentList = document.getElementsByClassName(`student-list`)[0];
      addStyle(sList, studentList);
    }
    else if (event.target.id == `change` || event.target.className == `change-student`)
    {
      removeStyle();
      clearInput();
      let change = document.getElementById(`change`);
      let changeStudent = document.getElementsByClassName(`change-student`)[0];
      addStyle(change, changeStudent);
    }
    else if (event.target.id == `query` || event.target.className == `query-student`)
    {
      removeStyle();
      clearInput();
      let query = document.getElementById(`query`);
      let queryStudent = document.getElementsByClassName(`query-student`)[0];
      addStyle(query, queryStudent);
    }
    if (event.target.id == `btn01`)
    {
      let addId = studentsData[studentsData.length - 1].id;
      let inputName = document.getElementById(`name`);
      let inputAag = document.getElementById(`age`);
      let checkBox = document.getElementsByClassName(`add1`);
      let addName = inputName.value;
      let addAge = inputAag.value;
      let addGender;
      for (let i = 0; i < checkBox.length; i++)
      {
        if (checkBox[i].checked)
        {
          addGender = checkBox[i].value;
        }
      }
      studentsData.push(
      {
        id: `${++addId}`,
        name: addName,
        age: addAge,
        gender: addGender,
      });
      init();
    }
    else if (event.target.className == `btn04`)
    {
      removeStyle();
      let change = document.getElementById(`change`);
      let changeStudent = document.getElementsByClassName(`change-student`)[0];
      addStyle(change, changeStudent);
      let name1 = document.getElementById(`name1`);
      let age1 = document.getElementById(`age1`);
      let change1 = document.getElementsByClassName(`change1`);
      let btn02 = document.getElementById(`btn02`);
      name1.value = studentsData[event.target.dataset.x].name;
      age1.value = studentsData[event.target.dataset.x].age;
      for (let i = 0; i < change1.length; i++)
      {
        if (studentsData[event.target.dataset.x].gender == change1[i].value)
        {
          change1[i].checked = true;
        }
      }
      btn02.disabled = false;
      changIndex = event.target.dataset.x;
    }
    else if (event.target.id == `btn02`)
    {
      let change1 = document.getElementsByClassName(`change1`);
      let name1 = document.getElementById(`name1`);
      let age1 = document.getElementById(`age1`);
      let newName = name1.value;
      let newAge = age1.value;
      let newGender;
      for (let i = 0; i < change1.length; i++)
      {
        if (change1[i].checked)
        {
          newGender = change1[i].value;
        }
      }
      studentsData.splice(changIndex, 1,
      {
        id: changIndex - 0 + 1,
        name: newName,
        age: newAge,
        gender: newGender,
      });
      init();
    }
    else if (event.target.className == `btn05`)
    {
      confirm(`确认删除吗？`);
      if (confirm)
      {
        studentsData.splice(event.target.dataset.s, 1);
        init();
      }
    }
    else if (event.target.id == `btn03`)
    {
      let name = [];
      let age = [];
      let gender = [];
      for (let j = 0; j < studentsData.length; j++)
      {
        name.push(studentsData[j].name);
        age.push(studentsData[j].age);
        gender.push(studentsData[j].gender);
      }
      let cx = document.getElementById(`cx`);
      let optionEle = document.getElementsByTagName(`select`)[0];
      if (optionEle.value == "姓名")
      {
        let inputInfo = cx.value;
        if (inputInfo != "")
        {
          let index = name.indexOf(inputInfo);
          init([studentsData[index]]);
        }
      }
      else if (optionEle.value == "年龄")
      {
        let inputInfo = cx.value;
        let a = findall(age, inputInfo);
        let tbody = document.getElementsByTagName(`tbody`)[0];
        tbody.innerHTML = "";
        for (let i = 0; i < a.length; i++)
        {
          init([studentsData[a[i]]], i.length - 0);
        }
      }
      else if (optionEle.value == "性别")
      {
        let inputInfo = cx.value;
        let a = findall(gender, inputInfo);
        let tbody = document.getElementsByTagName(`tbody`)[0];
        tbody.innerHTML = "";
        for (let i = 0; i < a.length; i++)
        {
          init([studentsData[a[i]]], i.length - 0);
        }
      }
    }
  });
});