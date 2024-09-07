docker build -t "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.8.08" -f Dockerfile .
docker push "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.8.08"

# kubectl apply -f wekube-docs.yaml
# kubectl -n wekube-web get pod