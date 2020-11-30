const buffer  = Buffer.alloc(8);


buffer[0] = 88;
buffer[1] = 0x88;
console.log(buffer);

/*
  事实上我们创建Buffer时，
  并不会频繁的向操作系统申请内存，
  它会默认先申请一个8*1024的空间
*/