var UI = new VDLib.UI({});

/** Сабмит по форме с файлами */
function onFormSubmit(e) {
  UI.processSubmit(e);
}

/** Первоначальная настройка */
function doSetup() {
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onFormSubmit()
    .create();
}

function testSubmit() {
  onFormSubmit({
    "authMode": "FULL",
    "namedValues": {
      "Заказы для WB в пути": ["https://drive.google.com/open?id=1Mi8n_w4PtED6cgxOewyyzOOEPXBiVrdN"],
      "Отметка времени": ["01.05.2020 13:57:31"],
      "ID клиента": ["1ciw6vhcebT3OTzWrA2oNWv5VnMMmRZ54n4kwlHy4lVU"],
      "Остатки товара на складах WB": ["https://drive.google.com/open?id=1HxKDcFoI2-1NIgStfNefJJsr1Hfg24Kz"],
      "Вся номенклатура WB": ["https://drive.google.com/open?id=1nM9nkJRigzSjYiDn_PhPHZAd_HQ6ld1q"],
      "Остатки на ваших складах": [""],
      "Дефицит товаров WB": ["https://drive.google.com/open?id=1zMcj9smMxxwooVPwr0_ipBEc0CezR73p"],
      "Продажи WB": ["https://drive.google.com/open?id=1Ye1J_77DhwufuQoXPKi0myAI-zFB6iDe"],
      "Товарные движения WB": ["https://drive.google.com/open?id=1BXteJ7Lc5KHWpAWAg3xZRLZS9LWNMm1v"],
      "Лист ожидания WB": ["https://drive.google.com/open?id=1HmkQkVLjw7sEEXD2PKsSoV7dCA9Dh9oq"],
      "Оборачиваемость товаров WB": ["https://drive.google.com/open?id=1wNojDa71to1kBIAhdCwya16NnbYNLCVc"]
    },
    "range": {"columnEnd": 1, "columnStart": 1, "rowEnd": 1, "rowStart": 1},
    "source": {},
    "triggerUid": "1972887634482026878"
  });
}