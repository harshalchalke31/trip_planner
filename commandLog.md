## To create Next.js Project
npx create-next-app@15.4.4

## To install shadcn component library
npx shadcn@latest init

## Install button component
npx shadcn@latest add button

## Install textarea
npx shadcn@latest add textarea

## Updating to Next.js latest for Clerk
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

npm cache verify
npm i next@latest react@latest react-dom@latest

## Install Clerk
npm i @clerk/nextjs@latest
