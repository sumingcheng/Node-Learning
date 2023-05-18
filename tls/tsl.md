# OpenSSL

在 Windows 上使用 OpenSSL 生成 server-key.pem 和 server-cert.pem 文件的步骤如下：

1. 下载 OpenSSL for Windows 安装包并安装。可以从官网下载安装包：https://slproweb.com/products/Win32OpenSSL.html
2. 打开命令提示符窗口（Windows + R，输入 cmd 回车），进入 OpenSSL 安装目录下的 bin 目录，例如：

```
cd C:\OpenSSL-Win64\bin
```

1. 输入以下命令生成私钥：

```
openssl genrsa -out server-key.pem 2048
```

其中，2048 是密钥位数，可以根据需要进行调整。

1. 输入以下命令生成证书签名请求（CSR）：

```
openssl req -new -key server-key.pem -out server-csr.pem
```

在执行过程中会提示输入一些基本信息，例如国家、地区、组织、通用名称等，根据需要填写即可。

1. 输入以下命令生成自签名证书：

```
openssl x509 -req -days 365 -in server-csr.pem -signkey server-key.pem -out server-cert.pem
```

其中，-days 365 表示证书有效期为 365 天。

1. 执行完毕后，会在 bin 目录下生成 server-key.pem 和 server-cert.pem 文件，即为生成的私钥和证书。

示例：

```
C:\OpenSSL-Win64\bin>openssl genrsa -out server-key.pem 2048
Generating RSA private key, 2048 bit long modulus
........+++
...........................+++
e is 65537 (0x10001)

C:\OpenSSL-Win64\bin>openssl req -new -key server-key.pem -out server-csr.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:CN
State or Province Name (full name) [Some-State]:Beijing
Locality Name (eg, city) []:Beijing
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Test
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:localhost
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:

C:\OpenSSL-Win64\bin>openssl x509 -req -days 365 -in server-csr.pem -signkey server-key.pem -out server-cert.pem
Signature ok
subject=C = CN, ST = Beijing, L = Beijing, O = Test, CN = localhost
Getting Private key
```
