const bangladeshiProducts = [
    {
        id: 1,
        name: "Lux Soap",
        description: "Lux is a popular soap brand known for its luxurious fragrance and gentle cleansing properties.",
        category: "Soap",
        country: "Bangladesh"
    },
    {
        id: 2,
        name: "Sunsilk Shampoo",
        description: "Sunsilk shampoo offers a range of hair care solutions, including nourishment, volume, and shine.",
        category: "Shampoo",
        country: "Bangladesh"
    },
    {
        id: 3,
        name: "Wheel Dishwash Bar",
        description: "Wheel dishwash bar effectively removes grease and stains from dishes, leaving them sparkling clean.",
        category: "Dishwash Bar",
        country: "Bangladesh"
    },
    {
        id: 4,
        name: "Dettol Antiseptic Liquid",
        description: "Dettol Antiseptic Liquid kills germs and provides protection against infection on cuts, scratches, and insect bites.",
        category: "Antiseptic",
        country: "Bangladesh"
    },
    {
        id: 5,
        name: "Total clean Toothpaste",
        description: "Total clean Toothpaste provides complete oral care with its unique formulation that fights germs, prevents cavities, and freshens breath.",
        category: "Toothpaste",
        country: "Bangladesh"
    },
    {
        id: 6,
        name: "Ponds Beauty Cream",
        description: "Ponds Beauty Cream hydrates and nourishes the skin, leaving it soft, smooth, and radiant.",
        category: "Beauty",
        country: "Bangladesh"
    },
    {
        id: 7,
        name: "Lifebuoy Handwash",
        description: "Lifebuoy Handwash cleans hands effectively and provides protection against germs, ensuring proper hand hygiene.",
        category: "Handwash",
        country: "Bangladesh"
    },
    // Three additional products
    {
        id: 8,
        name: "Miswak Toothbrush",
        description: "Colgate Toothbrush with soft bristles gently cleans teeth and gums, providing effective oral hygiene.",
        category: "Toothbrush",
        country: "Bangladesh"
    },
    {
        id: 9,
        name: "Fair & Lovely Cream",
        description: "Fair & Lovely Cream brightens and evens out skin tone, giving a fairer complexion with regular use.",
        category: "Skin Care",
        country: "Bangladesh"
    },
    {
        id: 10,
        name: "Fastpic Toilet Cleaner",
        description: "Fastpic Toilet Cleaner removes tough stains and kills germs, leaving your toilet clean and fresh.",
        category: "Toilet Cleaner",
        country: "Bangladesh"
    },
];



const indianProducts = [
    {
        id: 4,
        name: "Navlon Antiseptic Liquid",
        description: "Dettol Antiseptic Liquid is a household disinfectant that provides protection against germs and bacteria.",
        category: "Antiseptic",
        country: "India"
    },
    {
        id: 5,
        name: "Patanjali Dant Kanti Toothpaste",
        description: "Patanjali Dant Kanti Toothpaste is an herbal toothpaste known for its natural ingredients and oral care benefits.",
        category: "Toothpaste",
        country: "India"
    },
    {
        id: 6,
        name: "Handsome Cream",
        description: "Fair & Lovely Fairness Cream is a popular beauty product that claims to lighten the skin tone and reduce dark spots.",
        category: "Beauty",
        country: "India"
    }
];

const israeliProducts = [
    {
        id: 7,
        name: "Ahava Dead Sea Mineral Hand Cream",
        description: "Ahava Dead Sea Mineral Hand Cream is enriched with minerals from the Dead Sea, providing deep hydration and nourishment to the skin.",
        category: "Hand Cream",
        country: "Israel"
    },
    {
        id: 8,
        name: "Sabra Hummus",
        description: "Sabra Hummus is a creamy dip made from chickpeas, tahini, and olive oil, perfect for snacking or spreading on sandwiches.",
        category: "Hummus",
        country: "Israel"
    },
    {
        id: 9,
        name: "Israeli Couscous",
        description: "Israeli Couscous, also known as pearl couscous, is a type of pasta made from semolina flour, popular in Middle Eastern cuisine.",
        category: "Couscous",
        country: "Israel"
    }
];

// Combine all products
export const allProducts = [
    ...bangladeshiProducts,
    ...indianProducts,
    ...israeliProducts
];


