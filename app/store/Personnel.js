Ext.define('TutorialApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'TutorialApp.model.Personnel',

    data: { items: [
        { id: 1, name: "Notebool Lenovo", description: "Тип матрицы экрана: TFT TN. Процессор: AMD Athlon. Количество ядер процессора: 2. Серия процессора.: 3050U.", cost: 100, count: 2 },
        { id: 2, name: "Keyboard OKLICK", description: "Инновационная bluetooth-клавиатура предназначена для работы со всеми версиями iPad, IPhone и планшетами на ОС Windows, а также устройствами на базе ОС Android.", cost: 50, count: 8 },
        { id: 3, name: "Netbook adapter", description: "MU6H принимает сигналы Wi-Fi в двух диапазонах. Поддержка 256-QAM увеличивает скорость передачи данных на 2,4 ГГц со 150 Мбит/с до 200 Мбит/с, повышая производительность на 33%.", cost: 100, count: 0 },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
