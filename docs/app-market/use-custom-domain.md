---
sidebar_position: 3
sidebar_label: 使用自定义域名
title: 使用自定义域名
description: 了解WeKube中如何自定义域名
tags: [WeKube,应用市场,自定义域名]
keywords: [WeKube,应用市场,自定义域名]
---

如果你需要使用自己的域名，WeKube也支持配置自定义域名，请参考以下步骤：

:::tip[提示]

仅支持已经ICP备案成功的域名。

:::

## 开始之前

:::tip[提示]

需要提前给要使用的域名添加一个CNAME类型的DNS记录，并解析到cname.a.wekube.com。

:::

要检查一个CNAME类型的DNS记录是否已经生效，您可以按照以下方法：

- **使用命令行工具查询**：

   在Windows中可以使用`nslookup`命令。

   ```shell
   nslookup yourdomain.com
   ```

   在Unix/Linux或macOS系统中可以使用`dig`命令。

   ```shell
   dig yourdomain.com CNAME
   ```

   上述命令会显示与您域名相关的所有DNS记录。

- **使用在线DNS查询工具**：

   [WhatIsMyIP.com](https://www.whatismyip.com/dns-lookup/)

   选择类型为CNAME，输入您的自定义域名`https://yourdomain.com`，然后提交。

   - 如果已经生效就会直接显示；
   - 如果提示`no records found`就是还没有生效。

## 使用自定义域名

1. 首先进入[【Ingress管理】](https://wekube.com/zh-Hans/kubernetes/ingresses)页面。

2. 找到目标应用的Ingress对象，然后点击【详情】。

   ![image-20241014233516649](./img/ingresses-list.png)

3. 点击【编辑】图标按钮。

   ![image-20241014233805504](./img/ingresses-describe.png)

4. 配置自定义域名

   - 仅删除 ingress.wekube.com/with-host注解，保留ingress.wekube.com/with-ssl注解。
   - 修改rule中的host为您的自定义域名。
   - 删除tls字段或者保持不变，WeKube会自动修改为您的域名并添加SSL证书。

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     annotations:
       ingress.wekube.com/with-ssl: 'true'
     namespace: u-be
   spec:
     rules:
       - host: demo.example.com
         http:
           paths:
             - backend:
                 service:
                   name: word-wordpress
                   port:
                     number: 80
               path: /
               pathType: ImplementationSpecific
   ```

5. 点击【确认】提交，配置完成。