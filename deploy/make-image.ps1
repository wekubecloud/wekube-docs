docker build -t "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.9.19" -f Dockerfile .
docker push "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.9.19"

# kubectl apply -f deploy/wekube-docs.yaml
kubectl -n wekube-web get pod