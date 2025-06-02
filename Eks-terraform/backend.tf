terraform {
  backend "s3" {
    bucket = "gbi-tf"
    key    = "EKS/terraform.tfstate"
    region = "ap-south-1"
  }
}