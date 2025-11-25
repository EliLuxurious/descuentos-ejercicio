terraform {
  required_version = ">= 1.5.0"
}

provider "aws" {
  region = "us-east-1"
}

# RECUERDA: el nombre del bucket debe ser único en todo el mundo.
resource "aws_s3_bucket" "demo" {
  bucket = "bucket-demo-eli-748699405709"
}
