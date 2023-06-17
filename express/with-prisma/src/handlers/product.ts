import { prismaClient } from "../../db"

export const getProducts = async (req, res) => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  })

  res.json({ data: user.products })
}

export const getOneProduct = async (req, res) => {
  const id = req.params.id

  const product = await prismaClient.product.findFirst({
    where: {
      id,
      userId: req.user.id,
    },
  })

  res.json({ data: product })
}

export const createProduct = async (req, res) => {
  const product = await prismaClient.product.create({
    data: {
      name: req.body.name,
      userId: req.user.id,
    },
  })
  res.json({ data: product })
}

export const updateProduct = async (req, res) => {
  const updated = await prismaClient.product.update({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id,
      },
    },
    data: { name: req.body.name },
  })
  res.json({ data: updated })
}

export const deleteProduct = async (req, res) => {
  await prismaClient.product.delete({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id,
      },
    },
  })
  res.json({ data: true })
}
