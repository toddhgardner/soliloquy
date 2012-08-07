pushd %CD%
node lib\r.js -o name=app out=public\js\app.min.js baseUrl=public\js\
popd
