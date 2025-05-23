import { FC } from 'react';
import { Button, mergeClasses, Tooltip } from '@fluentui/react-components';
import { IExecuteAction } from '@microsoft/teams.cards';

import useActionCardStyles from './Actions.styles';

export interface ExecuteActionCardProps {
  readonly value: IExecuteAction;
}

const ExecuteActionCard: FC<ExecuteActionCardProps> = ({ value }) => {
  if (value.tooltip) {
    return (
      <Tooltip content={value.tooltip} relationship="label">
        <ExecuteActionCardContent value={value} />
      </Tooltip>
    );
  }

  return <ExecuteActionCardContent value={value} />;
};

const ExecuteActionCardContent: FC<ExecuteActionCardProps> = ({ value }) => {
  const classes = useActionCardStyles();

  // Determine which style variant to use based on action style
  const styleVariant =
    value.style === 'positive'
      ? classes.positiveStyle
      : value.style === 'destructive'
        ? classes.destructiveStyle
        : '';

  return (
    <Button
      icon={value.iconUrl ? value.iconUrl : undefined}
      className={mergeClasses(classes.button, styleVariant)}
    >
      {value.title}
    </Button>
  );
};

ExecuteActionCard.displayName = 'ExecuteActionCard';
ExecuteActionCardContent.displayName = 'ExecuteActionCardContent';

export default ExecuteActionCard;
