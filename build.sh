npm run build
aws s3 rm s3://deepvision.sg/ --recursive
aws s3 sync dist/ s3://deepvision.sg --acl public-read --exclude .DS_Store