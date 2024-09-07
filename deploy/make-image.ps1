docker build -t "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.8.07" -f ../Dockerfile .
docker push "registry.cn-heyuan.aliyuncs.com/wekube/wekube-docs:v0.8.07"

# kubectl apply -f wekube-docs.yaml
# kubectl -n wekube-web get pod