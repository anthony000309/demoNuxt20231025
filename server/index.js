const express = require('express')
const consola = require('consola')
const { loadNuxt } = require('nuxt-start')
const app = express()

const isDev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000;

async function start () {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  await nuxt.listen(port, process.env.HOST)
}

start()