#!/bin/bash

version=0.0.0

GOARCH=amd64

macBuildName=folivora_${version}_darwin_${GOARCH}
winBuildName=folivora_${version}_windows_${GOARCH}
linuxBuildName=folivora_${version}_linux_${GOARCH}

# clear build/
rm -rf dist_build
mkdir dist_build

build() {
  # Mac os
  GOOS=darwin GOARCH=${GOARCH} go build -o folivora cmd/main.go
  upx folivora
  mv folivora dist_build/$macBuildName
  tar -cvf dist_build/${macBuildName}.tar dist_build/${macBuildName}
  gzip dist_build/${macBuildName}.tar
  rm -f dist_build/${macBuildName}


  # Linux
  GOOS=linux GOARCH=${GOARCH} go build -o folivora cmd/main.go
  upx folivora
  mv folivora dist_build/$linuxBuildName
  tar -cvf dist_build/${linuxBuildName}.tar dist_build/${linuxBuildName}
  gzip dist_build/${linuxBuildName}.tar
  rm -f dist_build/${linuxBuildName}


  # Win
  GOOS=windows GOARCH=${GOARCH} go build -o folivora.exe cmd/main.go
  upx folivora.exe
  mv folivora.exe dist_build/${winBuildName}.exe
  zip -j ${winBuildName}.zip dist_build/${winBuildName}.exe
  rm -f dist_build/${winBuildName}.exe
  mv ${winBuildName}.zip dist_build/${winBuildName}.zip
}

build
