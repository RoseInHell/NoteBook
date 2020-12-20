// 私钥
genrsa -out private.key 1024(此处是长度)

// 公钥
rsa -in private.key -pubout -out public.key