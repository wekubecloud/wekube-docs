docker build -t "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.9.21" -f Dockerfile .
docker push "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.9.21"

# kubectl apply -f deploy/wekube-docs.yaml
kubectl -n wekube-web get pod

# docker stop wekube-docs && docker rm wekube-docs
# docker run -d --name wekube-docs --restart=always -p 3100:80 registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.9.21
