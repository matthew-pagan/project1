BASE_URL=$1
NEW_VERSION=$2

docker buildx build --platform linux/amd64 --build-arg REACT_APP_BASE_URL=$BASE_URL -t -prod:$NEW_VERSION -f webserver/Dockerfile . --no-cache
docker push 

docker buildx build --platform linux/amd64  -t  -f backend/Dockerfile ./backend --no-cache
docker push chadmowbray/backend-prod:$NEW_VERSION