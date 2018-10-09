import * as React from 'react';
import { DealItem } from '../components';
import { IDeal } from '../types';
import { PipelineConsumer } from './PipelineContext';

type Props = {
  stageId: string;
  deal: IDeal;
  index: number;
  isDragging: boolean;
  provided;
};

export default (props: Props) => {
  return (
    <PipelineConsumer>
      {({ onAddDeal, onRemoveDeal, onUpdateDeal }) => {
        return (
          <DealItem
            {...props}
            onAdd={onAddDeal}
            onRemove={onRemoveDeal}
            onUpdate={onUpdateDeal}
          />
        );
      }}
    </PipelineConsumer>
  );
};
