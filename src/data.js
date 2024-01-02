const choice = [{header: "Exceptional Quality", content: "We are committed to sourcing only the freshest flowers to ensure that every arrangement is a masterpiece of beauty."} , {header: "Beautiful Presentation" , content: "Our floral arrangements are expertly designed and elegantly presented, reflecting sophistication and attention to detail."} , {header: "Prompt delivery" , content: "Whether it's a last-minute gift or a scheduled event, our efficient team ensures fresh, on-time flower arrivals."} ];

const reviews = [
  {profile: "home/profile.png" , name: "Sarah Hemsworth" , review: "This flower shop is a gem! Their attention to detail is remarkable, and it truly shows in the quality of their arrangements. I've received multiple bouquets from them, and each time, I've been blown away by the beauty and freshness of the flowers. It's a pleasure supporting such a talented and passionate team."} , 
  {profile: "home/profile.png" , name: "Sarah Hemsworth" , review: "This flower shop is a gem! Their attention to detail is remarkable, and it truly shows in the quality of their arrangements. I've received multiple bouquets from them, and each time, I've been blown away by the beauty and freshness of the flowers. It's a pleasure supporting such a talented and passionate team."} , 
  {profile: "home/profile.png" , name: "Sarah Hemsworth" , review: "This flower shop is a gem! Their attention to detail is remarkable, and it truly shows in the quality of their arrangements. I've received multiple bouquets from them, and each time, I've been blown away by the beauty and freshness of the flowers. It's a pleasure supporting such a talented and passionate team."} , 
  {profile: "home/profile.png" , name: "Sarah Hemsworth" , review: "This flower shop is a gem! Their attention to detail is remarkable, and it truly shows in the quality of their arrangements. I've received multiple bouquets from them, and each time, I've been blown away by the beauty and freshness of the flowers. It's a pleasure supporting such a talented and passionate team."} , 
  {profile: "home/profile.png" , name: "Sarah Hemsworth" , review: "This flower shop is a gem! Their attention to detail is remarkable, and it truly shows in the quality of their arrangements. I've received multiple bouquets from them, and each time, I've been blown away by the beauty and freshness of the flowers. It's a pleasure supporting such a talented and passionate team."} 
]

const featureSlides =[{img: "/home/beauty.png" , name: "Rare Beauty" , price: "$ 94" , id: "rare"} , {img: "/home/sunflower.png" , name: "Sunflower bliss" , price: "$ 70" , id: "sun"} , {img: "/home/belle.png" , name: "Belle Treasure" , price: "$ 85" , id: "belle"}]

const blogSlides = [
  {img: "home/blog-1.png" , title: "DIY Flower Crafts" , content: "There's something magical about crafting with flowers – the gentle touch of petals, the vibrant colors, and the natural beauty that unfolds as you create. DIY flower craft is a delightful" } ,
  {img: "home/blog-2.png" , title :"Wedding Flower Trends" , content: "Wedding flowers have always been an integral part of creating a magical ambiance on the big day. With each passing year, new trends and innovative ideas emerge, adding fresh dimensions"},
  {img: "home/blog-3.png" , title :"The Language of Flowers" , content: "Throughout history, flowers have been regarded as messengers, conveying sentiments that words alone cannot express. This silent language, known as the 'language of flowers' or floriography"}
];

const shopData = [{
  "id": 1,
  "flower": "Celestial Grace",
  "price": "$63.68",
  "color": "Blue",
  "img": "Shop/CelestialGrace.png",
  "ocassion": "Anniversary" ,
  "Type": "Lisianthus" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 2,
  "flower": "Crystal Veil",
  "price": "$44.56",
  "color": "Yellow",
  "img": "Shop/CrystalVeil.png",
  "ocassion": "Birthday" ,
  "Type": "Sunflowers" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 3,
  "flower": "Heart Springs",
  "price": "$96.73",
  "color": "Red",
  "img": "Shop/HeartSprings.png",
  "ocassion": "Seasonal" ,
  "Type": "Gerberas" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 4,
  "flower": "Moonlit Bloom",
  "price": "$51.23",
  "color": "Purple",
  "img": "Shop/MoonlitBloom.png",
  "ocassion": "Seasonal" ,
  "Type": "Hydrangea" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 5,
  "flower": "Radiant Charm",
  "price": "$99.70",
  "color": "Pink",
  "img": "Shop/RadiantCharm.png",
  "ocassion": "Romance" ,
  "Type": "Carnation" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 6,
  "flower": "Rare Beauty",
  "price": "$11.95",
  "color" : "Pink",
  "img": "Shop/RareBeauty.png",
  "ocassion": "Wedding" ,
  "Type": "Lisianthus" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 7,
  "flower": "Royal Rose",
  "price": "$39.49",
  "color": "Pink",
  "img": "Shop/RoyalRose.png",
  "ocassion": "Romance" ,
  "Type": "Roses" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 8,
  "flower": "Silk Serenade",
  "price": "$26.20",
  "color": "White",
  "img": "Shop/SilkSerenade.png",
  "ocassion": "Thank you" ,
  "Type": "Peonies" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 9,
  "flower": "Starlit Symphony",
  "price": "$86.40",
  "color": "White",
  "img": "Shop/StarlitSymphony.png",
  "ocassion": "Thank You" ,
  "Type": "Daisies" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 10,
  "flower": "Starry Petals",
  "price": "$73.57",
  "color": "Blue",
  "img": "Shop/StarryPetals.png",
  "ocassion": "Congratulations" ,
  "Type": "Hydrangea" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 11,
  "flower": "Spring Mix",
  "price": "$40.07",
  "color": "Pink", 
  "img": "Shop/SpringMix.png",
  "ocassion": "Seasonal" ,
  "Type": "Irises" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 12,
  "flower": "Roses And Carnation",
  "price": "$93.05",
  "color": "Pink",
  "img": "Shop/RosesAndCarnation.png",
  "ocassion": "Wedding" ,
  "Type": "Carnations" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 13,
  "flower": "Sunflower Bliss",
  "price": "$41.51",
  "color": "Yellow",
  "img": "Shop/SunflowerBliss.png",
  "ocassion": "Wedding" ,
  "Type": "Sunflowers" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 14,
  "flower": "Princess Roses",
  "price": "$86.55",
  "color": "White",
  "img": "Shop/PrincessRoses.png",
  "ocassion": "Wedding" ,
  "Type": "Roses" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 15,
  "flower": "Frosty Mix",
  "price": "$98.37",
  "color": "Ice",
  "img": "Shop/FrostyMix.png",
  "ocassion": "Seasonal" ,
  "Type": "Tulips" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 16,
  "flower": "Basket Pod",
  "price": "$82.04",
  "color": "Rainbow",
  "img": "Shop/BasketPod.png",
  "ocassion": "Get Well Soon" ,
  "Type": "Orchids" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}, {
  "id": 17,
  "flower": "Belle Treasure",
  "price": "$77.22",
  "color": "Yellow",
  "img": "Shop/BelleTreasure.png",
  "ocassion": "Gift" ,
  "Type": "Alstroemeria" , 
  "content": "Experience the regal essence of our Royal Roses Bouquet, a majestic masterpiece fit for royalty. This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur." , 
  "description": "This opulent arrangement showcases a luxurious selection of the finest long-stemmed roses, carefully handpicked and arranged to create an impressive display of elegance and grandeur. Each velvety petal exudes timeless beauty and grace, expressing sentiments of admiration, love, and admiration. Adorned with lush greenery, this resplendent bouquet captures the essence of sophistication and serves as a true testament to the beauty and power of nature's most cherished symbol - the rose. Elevate any occasion with this striking bouquet that is sure to leave a lasting impression on your loved ones or make a regal statement of your own. Unveil the royal experience of our Royal Roses Bouquet and embrace the grandeur of luxury blooms." ,
  "quantity": 10 ,
  "review": [{
    id: 1,
    user: 'Amy Johnson',
    rating: 5,
    comment: 'Beautiful flowers! The arrangement was stunning, and the delivery was right on time. Will definitely order again.'
  },
  {
    id: 2,
    user: 'John Smith',
    rating: 4,
    comment: 'Great selection of flowers. The bouquet I ordered exceeded my expectations. Prompt and friendly service.'
  }, 
  {
    id: 7,
    user: 'Olivia Taylor',
    rating: 5,
    comment: 'Excellent service! The florist was attentive to my preferences, and the final arrangement was exactly what I wanted.'
  },
  {
    id: 8,
    user: 'Daniel Brown',
    rating: 4,
    comment: 'Reliable and professional flower delivery. The recipient was delighted with the surprise. Thank you!'
  },]
}]

const occasions = [ "Anniversary" , "Birthday" , "Congratulations" , "Get well soon" , "Gift" , "Romance" , "Seasonal" , "Sympathy" , "Thank you" ,"Wedding" ]

const types = ["Alstroemeria" , "Carnations" , "Daffodils" , "Daisies" , "Gerberas" , "Hydrangea" , "Irises" , "Orchids" , "Peonies" , "Roses" , "Sunflowers" , "Tulips" ]

const colors = ["Red" , "Pink" , "Yellow" , "Blue" , "Purple" ,"Rainbow" , "Ice" , "White" ]

export {choice , reviews , featureSlides , blogSlides , shopData , occasions , types , colors};