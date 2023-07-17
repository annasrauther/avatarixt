import { color } from './colors';

interface partMapProps {
  [key: string]: {
    label: string;
    component: string;
    options: {
      id: string;
      label?: string;
      value: string | boolean;
      image?: string;
      hex?: string;
    }[];
    disables?: {
      [key: string]: string[] | boolean[];
    };
  };
}

const partMap: partMapProps = {
  mask: {
    label: 'Background',
    component: 'switch',
    options: [
      { id: 'mask-true', label: 'True', value: true },
      { id: 'mask-false', label: 'False', value: false },
    ],
  },
  body: {
    label: 'Body',
    component: 'card',
    options: [
      {
        id: 'body-chest',
        label: 'Male',
        value: 'chest',
        image: 'parts/body-chest.svg',
      },
      {
        id: 'body-breasts',
        label: 'Female',
        value: 'breasts',
        image: 'parts/body-breasts.svg',
      },
    ],
  },
  skinTone: {
    label: 'Skin Tone',
    component: 'color',
    options: color.skin,
  },
  clothing: {
    label: 'Clothing',
    component: 'card',
    options: [
      {
        id: 'clothing-naked',
        label: 'Naked',
        value: 'naked',
        image: 'parts/clothing-naked.svg',
      },
      {
        id: 'clothing-shirt',
        label: 'T-Shirt',
        value: 'shirt',
        image: 'parts/clothing-shirt.svg',
      },
      {
        id: 'clothing-dressShirt',
        label: 'Shirt',
        value: 'dressShirt',
        image: 'parts/clothing-dressShirt.svg',
      },
      {
        id: 'clothing-vneck',
        label: 'V-Neck',
        value: 'vneck',
        image: 'parts/clothing-vneck.svg',
      },
      {
        id: 'clothing-tankTop',
        label: 'Tank Top',
        value: 'tankTop',
        image: 'parts/clothing-tankTop.svg',
      },
      {
        id: 'clothing-dress',
        label: 'Dress',
        value: 'dress',
        image: 'parts/clothing-dress.svg',
      },
    ],
    disables: {
      clothingColor: ['naked'],
      graphic: ['naked', 'dress'],
    },
  },
  clothingColor: {
    label: 'Clothing Color',
    component: 'color',
    options: color.clothing,
  },
  graphic: {
    label: 'Graphic',
    component: 'card',
    options: [
      {
        id: 'graphic-none',
        label: 'None',
        value: 'none',
        image: 'parts/none.svg',
      },
      {
        id: 'graphic-redwood',
        label: 'Redwood',
        value: 'redwood',
        image: 'parts/graphic-redwood.svg',
      },
      {
        id: 'graphic-gatsby',
        label: 'Gatsby',
        value: 'gatsby',
        image: 'parts/graphic-gatsby.svg',
      },
      {
        id: 'graphic-vue',
        label: 'Vue',
        value: 'vue',
        image: 'parts/graphic-vue.svg',
      },
      {
        id: 'graphic-react',
        label: 'React',
        value: 'react',
        image: 'parts/graphic-react.svg',
      },
      {
        id: 'graphic-graphQL',
        label: 'GraphQL',
        value: 'graphQL',
        image: 'parts/graphic-graphQL.svg',
      },
    ],
  },
  hair: {
    label: 'Hair',
    component: 'card',
    options: [
      {
        id: 'hair-none',
        label: 'None',
        value: 'none',
        image: 'parts/none.svg',
      },
      {
        id: 'hair-long',
        label: 'Long',
        value: 'long',
        image: 'parts/hair-long.svg',
      },
      {
        id: 'hair-bun',
        label: 'Bun',
        value: 'bun',
        image: 'parts/hair-bun.svg',
      },
      {
        id: 'hair-short',
        label: 'Short',
        value: 'short',
        image: 'parts/hair-short.svg',
      },
      {
        id: 'hair-pixie',
        label: 'Pixie',
        value: 'pixie',
        image: 'parts/hair-pixie.svg',
      },
      {
        id: 'hair-balding',
        label: 'Balding',
        value: 'balding',
        image: 'parts/hair-balding.svg',
      },
      {
        id: 'hair-buzz',
        label: 'Buzz',
        value: 'buzz',
        image: 'parts/hair-buzz.svg',
      },
      {
        id: 'hair-afro',
        label: 'Afro',
        value: 'afro',
        image: 'parts/hair-afro.svg',
      },
      {
        id: 'hair-bob',
        label: 'Bob',
        value: 'bob',
        image: 'parts/hair-bob.svg',
      },
    ],
    disables: {
      hairColor: ['none'],
      hat: ['balding', 'afro'],
      hatColor: ['balding', 'afro'],
    },
  },
  facialHair: {
    label: 'Facial Hair',
    component: 'card',
    options: [
      {
        id: 'facialHair-none',
        label: 'None',
        value: 'none',
        image: 'parts/none.svg',
      },
      {
        id: 'facialHair-stubble',
        label: 'Stubble',
        value: 'stubble',
        image: 'parts/facialHair-stubble.svg',
      },
      {
        id: 'facialHair-mediumBeard',
        label: 'Beard',
        value: 'mediumBeard',
        image: 'parts/facialHair-mediumBeard.svg',
      },
    ],
  },
  hairColor: {
    label: 'Hair Color',
    component: 'color',
    options: color.hair,
  },
  hat: {
    label: 'Hat',
    component: 'card',
    options: [
      {
        id: 'hat-none',
        label: 'None',
        value: 'none',
        image: 'parts/none.svg',
      },
      {
        id: 'hat-beanie',
        label: 'Beanie',
        value: 'beanie',
        image: 'parts/hat-beanie.svg',
      },
      {
        id: 'hat-turban',
        label: 'Turban',
        value: 'turban',
        image: 'parts/hat-turban.svg',
      },
    ],
    disables: {
      hatColor: ['none'],
    },
  },
  hatColor: {
    label: 'Hat Color',
    component: 'color',
    options: color.clothing,
  },
  eyebrows: {
    label: 'Eyebrows',
    component: 'card',
    options: [
      {
        id: 'eyebrows-raised',
        label: 'Raised',
        value: 'raised',
        image: 'parts/eyebrows-raised.svg',
      },
      {
        id: 'eyebrows-leftLowered',
        label: 'Lowered',
        value: 'leftLowered',
        image: 'parts/eyebrows-leftLowered.svg',
      },
      {
        id: 'eyebrows-serious',
        label: 'Serious',
        value: 'serious',
        image: 'parts/eyebrows-serious.svg',
      },
      {
        id: 'eyebrows-angry',
        label: 'Angry',
        value: 'angry',
        image: 'parts/eyebrows-angry.svg',
      },
      {
        id: 'eyebrows-concerned',
        label: 'Worried',
        value: 'concerned',
        image: 'parts/eyebrows-concerned.svg',
      },
    ],
  },
  lashes: {
    label: 'Lashes',
    component: 'switch',
    options: [
      { id: 'lashes-true', label: 'True', value: true },
      { id: 'lashes-false', label: 'False', value: false },
    ],
  },
  eyes: {
    label: 'Eyes',
    component: 'card',
    options: [
      {
        id: 'eyes-normal',
        label: 'Normal',
        value: 'normal',
        image: 'parts/eyes-normal.svg',
      },
      {
        id: 'eyes-leftTwitch',
        label: 'Twitch',
        value: 'leftTwitch',
        image: 'parts/eyes-leftTwitch.svg',
      },
      {
        id: 'eyes-happy',
        label: 'Happy',
        value: 'happy',
        image: 'parts/eyes-happy.svg',
      },
      {
        id: 'eyes-content',
        label: 'Content',
        value: 'content',
        image: 'parts/eyes-content.svg',
      },
      {
        id: 'eyes-squint',
        label: 'Squint',
        value: 'squint',
        image: 'parts/eyes-squint.svg',
      },
      {
        id: 'eyes-simple',
        label: 'Simple',
        value: 'simple',
        image: 'parts/eyes-simple.svg',
      },
      {
        id: 'eyes-dizzy',
        label: 'Dizzy',
        value: 'dizzy',
        image: 'parts/eyes-dizzy.svg',
      },
      {
        id: 'eyes-wink',
        label: 'Wink',
        value: 'wink',
        image: 'parts/eyes-wink.svg',
      },
      {
        id: 'eyes-heart',
        label: 'Heart',
        value: 'heart',
        image: 'parts/eyes-heart.svg',
      },
    ],
  },
  accessory: {
    label: 'Accessory',
    component: 'card',
    options: [
      {
        id: 'accessory-none',
        label: 'None',
        value: 'none',
        image: 'parts/none.svg',
      },
      {
        id: 'accessory-roundGlasses',
        label: 'Glasses',
        value: 'roundGlasses',
        image: 'parts/accessory-roundGlasses.svg',
      },
      {
        id: 'accessory-tinyGlasses',
        label: 'Eyewear',
        value: 'tinyGlasses',
        image: 'parts/accessory-tinyGlasses.svg',
      },
      {
        id: 'accessory-shades',
        label: 'Shades',
        value: 'shades',
        image: 'parts/accessory-shades.svg',
      },
    ],
  },
  mouth: {
    label: 'Mouth',
    component: 'card',
    options: [
      {
        id: 'mouth-grin',
        label: 'Grin',
        value: 'grin',
        image: 'parts/mouth-grin.svg',
      },
      {
        id: 'mouth-sad',
        label: 'Sad',
        value: 'sad',
        image: 'parts/mouth-sad.svg',
      },
      {
        id: 'mouth-openSmile',
        label: 'Smile',
        value: 'openSmile',
        image: 'parts/mouth-openSmile.svg',
      },
      {
        id: 'mouth-lips',
        label: 'Lips',
        value: 'lips',
        image: 'parts/mouth-lips.svg',
      },
      {
        id: 'mouth-open',
        label: 'Open',
        value: 'open',
        image: 'parts/mouth-open.svg',
      },
      {
        id: 'mouth-serious',
        label: 'Serious',
        value: 'serious',
        image: 'parts/mouth-serious.svg',
      },
      {
        id: 'mouth-tongue',
        label: 'Tongue',
        value: 'tongue',
        image: 'parts/mouth-tongue.svg',
      },
    ],
    disables: {
      lipColor: ['grin', 'sad', 'openSmile', 'open', 'serious', 'tongue'],
    },
  },
  lipColor: {
    label: 'Lip Color',
    component: 'color',
    options: color.lipColors,
  },
  faceMask: {
    label: 'Face Mask',
    component: 'switch',
    options: [
      { id: 'faceMask-true', label: 'True', value: true },
      { id: 'faceMask-false', label: 'False', value: false },
    ],
    disables: {
      faceMaskColor: [false],
    },
  },
  faceMaskColor: {
    label: 'Face Mask Color',
    component: 'color',
    options: color.clothing,
  },
};

export default partMap;
