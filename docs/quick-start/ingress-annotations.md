---
sidebar_position: 3
sidebar_label: 使用Ingress注解
title: 使用Ingress注解
description: 了解如何快速使用Ingress注解
tags: [WeKube, Ingress, 注解, annotations]
keywords: [WeKube, Ingress, 注解, annotations]
---

## Higress 注解
支持使用Higress注解，详情：https://higress.cn/docs/latest/user/annotation/。

例如，添加nginx.ingress.kubernetes.io/ssl-redirect注解，将HTTP 重定向为HTTPS：

```yaml
  annotations: 
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
```

## WeKube 注解

下面是WeKube 提供的 Ingress 注解支持。

### ingress.wekube.com/with-host

- 取值类型：bool，默认为false。

- 功能：是否需要系统为这个Ingress 分配域名。

- 使用示例：

  - 需要保持host为空。
  - 它并不会添加SSL，如果需要添加SSL还需要使用ingress.wekube.com/with-ssl注解。

  ```yaml
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: demo
    annotations:
      ingress.wekube.com/with-host: 'true'
  spec:
    rules:
      - host: 
        http:
          paths:
            - backend:
                service:
                  name: demo
                  port:
                    number: 80
              path: /
              pathType: ImplementationSpecific
  ```

- 生成的域名是可以预测的：

  - 单个Rule域名生成规则：`<Ingressm名称>.<用户ID>-<集群ID>.wekube.com`。例如demo.uid-a.wekukbe.com
  - 多个Rul域名生成规则e：`<Ingressm名称>[-Rule序号].<用户ID>-<集群ID>.wekube.com`。例如demo-2.uid-a.wekukbe.com



### ingress.wekube.com/with-ssl

- 取值类型：bool，默认为false。

- 功能：是否需要系统为这个Ingress 上的域名办法SSL证书。

- 使用示例：

  ```yaml
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: demo
    annotations:
      ingress.wekube.com/with-ssl: 'true'
  spec:
    rules:
      - host: demo.example.com
        http:
          paths:
            - backend:
                service:
                  name: demo
                  port:
                    number: 80
              path: /
              pathType: ImplementationSpecific
  ```

## 完整示例

1. 实现【系统分配域名+添加SSL证书+HTTP 重定向为HTTPS】配置如下：

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: demo
     annotations:
       ingress.wekube.com/with-host: 'true'
       ingress.wekube.com/with-ssl: 'true'
       nginx.ingress.kubernetes.io/ssl-redirect: 'true'
   spec:
     rules:
       - host: 
         http:
           paths:
             - backend:
                 service:
                   name: demo
                   port:
                     number: 80
               path: /
               pathType: ImplementationSpecific
   ```

2. 实现【自定义域名+添加SSL证书+HTTP 重定向为HTTPS】的配置如下：

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: demo
     annotations:
       ingress.wekube.com/with-ssl: 'true'
       nginx.ingress.kubernetes.io/ssl-redirect: 'true'
   spec:
     rules:
       - host: demo.example.com
         http:
           paths:
             - backend:
                 service:
                   name: demo
                   port:
                     number: 80
               path: /
               pathType: ImplementationSpecific
   ```

   - 使用的自定义域名，需要存在一个CNAME类型的DNS记录解析到cname.a.wekube.com，且已经生效。

