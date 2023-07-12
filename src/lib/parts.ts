import { color } from './theme';

interface partMapProps {
  [key: string]: {
    label: string;
    component: string;
    options: {
      id: string;
      label?: string;
      value: string | boolean;
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
      { id: 'body-chest', label: 'Male', value: 'chest' },
      { id: 'body-breasts', label: 'Female', value: 'breasts' },
    ],
    disables: {
      lashes: ['chest'],
      facialHair: ['breasts'],
    },
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
      { id: 'clothing-naked', label: 'Naked', value: 'naked' },
      { id: 'clothing-shirt', label: 'Shirt', value: 'shirt' },
      { id: 'clothing-dressShirt', label: 'Dress Shirt', value: 'dressShirt' },
      { id: 'clothing-vneck', label: 'V-Neck', value: 'vneck' },
      { id: 'clothing-tankTop', label: 'Tank Top', value: 'tankTop' },
      { id: 'clothing-dress', label: 'Dress', value: 'dress' },
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
      { id: 'graphic-none', label: 'None', value: 'none' },
      { id: 'graphic-redwood', label: 'Redwood', value: 'redwood' },
      { id: 'graphic-gatsby', label: 'Gatsby', value: 'gatsby' },
      { id: 'graphic-vue', label: 'Vue', value: 'vue' },
      { id: 'graphic-react', label: 'React', value: 'react' },
      { id: 'graphic-graphQL', label: 'GraphQL', value: 'graphQL' },
    ],
  },
  hair: {
    label: 'Hair',
    component: 'card',
    options: [
      { id: 'hair-none', label: 'None', value: 'none' },
      { id: 'hair-long', label: 'Long', value: 'long' },
      { id: 'hair-bun', label: 'Bun', value: 'bun' },
      { id: 'hair-short', label: 'Short', value: 'short' },
      { id: 'hair-pixie', label: 'Pixie', value: 'pixie' },
      { id: 'hair-balding', label: 'Balding', value: 'balding' },
      { id: 'hair-buzz', label: 'Buzz', value: 'buzz' },
      { id: 'hair-afro', label: 'Afro', value: 'afro' },
      { id: 'hair-bob', label: 'Bob', value: 'bob' },
    ],
    disables: {
      hairColor: ['none'],
    },
  },
  hairColor: {
    label: 'Hair Color',
    component: 'color',
    options: color.hair,
  },
  facialHair: {
    label: 'Facial Hair',
    component: 'card',
    options: [
      { id: 'facialHair-none', label: 'None', value: 'none' },
      { id: 'facialHair-stubble', label: 'Stubble', value: 'stubble' },
      {
        id: 'facialHair-mediumBeard',
        label: 'Medium Beard',
        value: 'mediumBeard',
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
      { id: 'eyes-normal', label: 'Normal', value: 'normal' },
      { id: 'eyes-leftTwitch', label: 'Left Twitch', value: 'leftTwitch' },
      { id: 'eyes-happy', label: 'Happy', value: 'happy' },
      { id: 'eyes-content', label: 'Content', value: 'content' },
      { id: 'eyes-squint', label: 'Squint', value: 'squint' },
      { id: 'eyes-simple', label: 'Simple', value: 'simple' },
      { id: 'eyes-dizzy', label: 'Dizzy', value: 'dizzy' },
      { id: 'eyes-wink', label: 'Wink', value: 'wink' },
      { id: 'eyes-heart', label: 'Heart', value: 'heart' },
    ],
  },
  eyebrows: {
    label: 'Eyebrows',
    component: 'card',
    options: [
      { id: 'eyebrows-raised', label: 'Raised', value: 'raised' },
      {
        id: 'eyebrows-leftLowered',
        label: 'Left Lowered',
        value: 'leftLowered',
      },
      { id: 'eyebrows-serious', label: 'Serious', value: 'serious' },
      { id: 'eyebrows-angry', label: 'Angry', value: 'angry' },
      { id: 'eyebrows-concerned', label: 'Concerned', value: 'concerned' },
    ],
  },
  mouth: {
    label: 'Mouth',
    component: 'card',
    options: [
      { id: 'mouth-grin', label: 'Grin', value: 'grin' },
      { id: 'mouth-sad', label: 'Sad', value: 'sad' },
      { id: 'mouth-openSmile', label: 'Open Smile', value: 'openSmile' },
      { id: 'mouth-lips', label: 'Lips', value: 'lips' },
      { id: 'mouth-open', label: 'Open', value: 'open' },
      { id: 'mouth-serious', label: 'Serious', value: 'serious' },
      { id: 'mouth-tongue', label: 'Tongue', value: 'tongue' },
    ],
    disables: {
      lipColor: ['lips'],
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
  accessory: {
    label: 'Accessory',
    component: 'card',
    options: [
      { id: 'accessory-none', label: 'None', value: 'none' },
      {
        id: 'accessory-roundGlasses',
        label: 'Round Glasses',
        value: 'roundGlasses',
      },
      {
        id: 'accessory-tinyGlasses',
        label: 'Tiny Glasses',
        value: 'tinyGlasses',
      },
      { id: 'accessory-shades', label: 'Shades', value: 'shades' },
    ],
  },
  hat: {
    label: 'Hat',
    component: 'card',
    options: [
      { id: 'hat-none', label: 'None', value: 'none' },
      { id: 'hat-beanie', label: 'Beanie', value: 'beanie' },
      { id: 'hat-turban', label: 'Turban', value: 'turban' },
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
};

export default partMap;
