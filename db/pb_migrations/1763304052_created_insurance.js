/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2704641423",
        "hidden": false,
        "id": "relation3830619013",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "pet",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1058254908",
        "hidden": false,
        "id": "relation1654271768",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "horse",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "select2147627439",
        "maxSelect": 1,
        "name": "insurance_name",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "nothing",
          "agria",
          "dina",
          "first",
          "folksam",
          "hedvig",
          "ica",
          "if",
          "manypets",
          "moderna",
          "svedea",
          "sveland",
          "trygg_hansa",
          "lassie",
          "petson",
          "dunstan",
          "other"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text255236820",
        "max": 0,
        "min": 0,
        "name": "insurance_number",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_2443732",
    "indexes": [],
    "listRule": null,
    "name": "insurance",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2443732");

  return app.delete(collection);
})
