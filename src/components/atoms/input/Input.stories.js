import { fn } from '@storybook/test';
import Input from './Input';

export default {
  title: 'atoms/Input',
  component: Input,

  args: {onChange: fn()},
};

export const Small = {
  args: {
    size: 'small',
  }
}

export const Medium = {
  args: {
    size: 'medium',
  }
}

export const Large = {
  args: {
    size: 'large',
  }
}