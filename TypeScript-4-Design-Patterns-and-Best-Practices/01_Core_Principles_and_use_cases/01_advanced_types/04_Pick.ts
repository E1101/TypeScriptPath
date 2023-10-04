/**
 * [ Pick ]
 *
 * If you have a type and you want to create another type but with only specific properties
 * selected out of the present ones, then you should use the Pick type. This is quite effective
 * in cases when you have a fat interface and you want to extract part of its properties for
 * use in your components.
 *
 * For example, we show a use case when you define a React button containing only specific properties:
 */
import { HTMLAttributes } from 'react';

type ButtonProps = Pick<
    HTMLAttributes<HTMLButtonElement>,
    "onClick" | "onSubmit" | "className" | "onFocus"
>;

class LoggingButton extends React.Component<ButtonProps> {
  // ...
}
