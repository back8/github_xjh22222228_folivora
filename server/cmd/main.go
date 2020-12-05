package main

import (
	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.Use(cors.Default())

	r.GET("/", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "dd")
	})

	r.Run(":7001")
}
