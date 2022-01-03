import { FC, HTMLAttributes, OlHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type UnorderedListProps = HTMLAttributes<HTMLUListElement>;
type OrderedListProps = OlHTMLAttributes<HTMLOListElement>;

type ListGroupProps =
  | ({
      variant: 'ordered';
    } & OrderedListProps)
  | ({
      variant: 'unordered';
    } & UnorderedListProps);

function ListGroup({ variant, ...props }: ListGroupProps) {
  const Component = variant === 'ordered' ? 'ol' : 'ul';
  return <Component {...props} />;
}

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  listStyle?: string;
}

const ListItem: FC<ListItemProps> = ({
  className,
  children,
  listStyle,
  ...props
}) => {
  return (
    <li
      className={twMerge(
        className,
        'flex flex-row-reverse justify-end gap-x-3',
      )}
      {...props}
    >
      {children}
      <span
        className={twMerge('text-green text-xs select-none h-fit', listStyle)}
      >
        ▹
      </span>
    </li>
  );
};

export const List = {
  Group: ListGroup,
  Item: ListItem,
};
