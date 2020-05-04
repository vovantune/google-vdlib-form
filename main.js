const UI = VDLib.createUI({});

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
      "Заказы для WB в пути": [""],
      "Отметка времени": [""],
      "ID клиента": [""],
      "Остатки товара на складах WB": [""],
      "Вся номенклатура WB": [""],
      "Остатки на ваших складах": [""],
      "Дефицит товаров WB": [""],
      "Продажи WB": [""],
      "Товарные движения WB": [""],
      "Лист ожидания WB": [""],
      "Оборачиваемость товаров WB": [""]
    }
  });
}