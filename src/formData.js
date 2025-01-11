const formData = {
    sizeOption: ["S", "M", "L"],
    thicknessOption: ["İnce", "Normal", "Kalın"],
    extraOption: ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalapeno", "Sarımsak", "Biber", "Ananas", "Kabak"],
    errorMessages: {
        boyut: "Lütfen pizza boyutu seçiniz!",
        kalinlik: "Lütfen pizza kanlınlığını seçiniz!",
        extra: "Minimum 4, maksimum 10 adet ekstra ürün seçilebilir!",
        isim: "Girilen isim 3 karakterden daha az olamaz!",
    }
};

export default formData;