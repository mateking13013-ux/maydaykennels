export interface Puppy {
  name: string;
  image: string;
  sex: 'Male' | 'Female';
  age: string;
  status: string;
  price: number;
  description: string;
  coat: string;
}

export const puppies: Puppy[] = [
  {
    name: 'Tank',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/08/TANK.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Tank is a playful and spirited puppy with a heart of gold. His stunning coat with beautiful markings makes him truly stand out. He loves exploring his surroundings, playing with toys, and snuggling up for cuddle time. Tank has a confident yet gentle personality that will bring endless joy to his forever family',
    coat: 'Beautiful coat with soft, feathery ears. Silky medium-length coat with tan/cream markings.'
  },
  {
    name: 'Tessa',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/08/TESSA.jpg',
    sex: 'Female',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Tessa is a beautiful and affectionate puppy with a sweet, loving personality. Her gorgeous coat is absolutely stunning, and her playful nature will keep you entertained. She enjoys being the center of attention and loves to give kisses. Tessa is perfect for anyone looking for a loyal and loving companion',
    coat: 'Chocolate dapple puppy with lighter cream/gray marbling and tan points. Long, feathery ears with a soft medium-to-long coat.'
  },
  {
    name: 'Lottie',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/05/LOTTIE-11.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Lottie is an adorable puppy with the sweetest personality. Her smooth coat is easy to maintain and her compact size makes her perfect for cuddling. She has a calm temperament but loves playtime too. Lottie is looking for a forever home where she can shower her family with love and affection',
    coat: 'Chocolate dapple puppy with tan points on the face and legs. Smooth, short coat with a long body and floppy ears.'
  },
  {
    name: 'Misha',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/05/MISHA-6.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Misha is a striking beauty with an enchanting personality. Her luxurious coat with beautiful marbling and tan accents is absolutely breathtaking. She is gentle, loving, and loves to be pampered. Misha has a regal presence but is incredibly sweet and affectionate with her family',
    coat: 'Dark dapple puppy with tan points and a lighter chest. Longer, wavy coat with feathery ears.'
  },
  {
    name: 'Digby',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/08/DIGBY.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Digby is a confident little gentleman with a curious spirit and a heart full of love. His charming markings and smooth coat make him irresistible. He loves to explore, play, and then curl up for naps. Digby has an outgoing personality and gets along well with everyone he meets',
    coat: 'Silver/gray dapple puppy with black patches and tan points on the face and legs. Smooth, short coat with black floppy ears.'
  },
  {
    name: 'Moo Moo',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/08/Moo-Moo.jpg',
    sex: 'Female',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Moo Moo is a graceful and affectionate puppy with a calm, loving personality. Her elegant coat with tan points and soft medium-length fur is truly unique. She enjoys peaceful moments and gentle play. Moo Moo would make an excellent companion for someone seeking a sweet, devoted friend',
    coat: 'Cream/silver dapple puppy with tan points on the face and paws. Floppy ears and a soft medium-length coat.'
  },
  {
    name: 'Scout',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/05/SCOUT.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Scout is a gorgeous puppy with feathery ears and a sweet face that will melt your heart. He has a friendly, outgoing personality and loves to play. Scout is looking for an active family who will enjoy adventures and cuddles with this handsome boy',
    coat: 'Light cream puppy with a soft, fluffy medium-length coat and feathery ears. Cream face and legs with a darker nose.'
  },
  {
    name: 'Victor',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/05/VICTOR-2.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Victor is a stunning puppy with the softest coat. His sweet temperament and love for cuddles make him an ideal companion. He is gentle, well-mannered, and loves being close to his family. Victor would thrive in a loving home where he can be showered with attention',
    coat: 'Beautiful puppy with a lighter chest and floppy ears. Soft, silky short-to-medium coat and big dark eyes.'
  },
  {
    name: 'Hudson',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/04/HUDSON.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Hudson is a striking puppy with mesmerizing eyes that will captivate your heart. His silky coat with unique markings and tan points makes him truly one of a kind. He has a playful yet gentle nature and loves affection. Hudson is searching for a family who will treasure his special beauty',
    coat: 'Chocolate-brown dapple puppy with tan points on the eyebrows, muzzle, chest, and paws. Floppy ears and a silky short-to-medium coat.'
  },
  {
    name: 'Odin',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/04/ODIN-1.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Odin is a handsome puppy with classic good looks. His smooth coat and playful, energetic personality make him a joy to be around. He loves running, playing, and then relaxing with his favorite humans. Odin is ready to bring laughter and love to his new home',
    coat: 'Solid chocolate-brown puppy with tan points on the eyebrows, cheeks, and paws. Smooth, short coat with floppy ears.'
  },
  {
    name: 'Bentley',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/04/BENTLEY.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Bentley is a classic puppy with a sleek coat and bright, alert eyes. He is curious, intelligent, and always ready for fun. His loyal personality makes him a wonderful companion who will follow you everywhere. Bentley is eager to find his forever family',
    coat: 'Black-and-tan puppy with a smooth, short coat. Tan eyebrows, tan muzzle, and tan paws with long floppy ears.'
  },
  {
    name: 'Norman',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/04/NORMAN.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Norman is a sweet puppy with a soft silky medium-length coat and gentle nature. He loves attention and being pampered by his family. His calm demeanor and loving personality make him perfect for anyone seeking a devoted companion. Norman cannot wait to share his love with you',
    coat: 'Chocolate-and-tan puppy with a soft, silky medium-length coat. Floppy, feathery ears and lighter tan markings on the face and paws.'
  },
  {
    name: 'Chess',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/05/CHESS-6.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Chess is a cute puppy with a smooth coat and spunky personality. His compact build and lively spirit make him absolutely adorable. He loves to play and explore but also enjoys quiet snuggle time. Chess is looking for an active family to match his energy',
    coat: 'Black-and-tan puppy with a smooth, short coat and subtle dapple spotting on the body. Tan points on the face, chest, and paws.'
  },
  {
    name: 'Brugge',
    image: 'https://deepskyblue-goldfinch-819888.hostingersite.com/wp-content/uploads/2025/04/BRUGGE.jpg',
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: 'Brugge is a classic puppy with a glossy coat and charming frame. He is the perfect companion who loves nothing more than being close to his humans. His sweet, gentle nature makes him ideal for families or individuals seeking a loving friend. Brugge is ready to steal your heart',
    coat: 'Black-and-tan puppy with a smooth, short coat. Tan eyebrows, tan muzzle, and tan legs with long floppy ears.'
  }
];

// Featured puppies for home page (first 5)
export const featuredPuppies = puppies.slice(0, 5).map(p => ({
  name: p.name,
  image: p.image,
  price: p.price
}));
