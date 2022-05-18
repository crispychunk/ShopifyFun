﻿# ShopifyFun2022



# Shopify Fun

Built for Shopify intern challenge


## How to get started

  

## Installation

Backend:
```bash
  cd Backend
  yarn
  npm start
```

This will start a server on local host 8000.

Frontend:
```bash
  cd Frontend
  yarn
  npm start
```
This will start the frontend and create a webapp.



## Backend Endpoints


```bash
GET /inventory/item/:itemId
```
Get an item from the inventory

```bash
POST /inventory/item
```
Create an item from the inventory
requires a body:
```bash
{
	"itemName": name,
	"amount" : amount
}
```

```bash
PUT /inventory/item/:itemId
```

Update inventory item
requires a body:
```bash
{
	"itemName": name,
	"amount" : amount
}
```

```bash
DEL /inventory/item/:itemId
```
Deletes an item.

--------------------------
```bash
GET /inventory/items
```
Get a list of items

```bash
DEL /inventory/items
```
Mass delete all items

--------------------------

```bash
POST /warehouse
```
Create a warehouse

```bash
GET /warehouse/:warehouseId
```
Get a warehouse

```bash
DEL /warehouse/:warehouseId
```
Delete a warehouse

```bash
GET /warehouses
```
Get a list of warehouses

