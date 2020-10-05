import React, { useState, useEffect, createRef } from 'react';
import styles from './index.css';
import Sortable from 'sortablejs';
import { ReactSortable } from 'react-sortablejs';
import { Card } from 'antd';

interface ItemType {
  id: number;
  name: string;
  description: string;
}

const ListContainer = props => <div className={styles.listContainer}>{props.children}</div>;

export default function() {
  const element = document.createElement('div');
  element.setAttribute('id', 'unrankedlist');
  Sortable.create(element, { direction: 'vertical' });

  const [unranked, setUnranked] = useState<ItemType[]>([
    {
      id: 1,
      name: 'shrek',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
    },
    {
      id: 2,
      name: 'fiona',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quod pariatur reiciendis iure hic delectus assumenda omnis vel tempore veritatis, voluptas ab',
    },
  ]);

  const [ranked, setRanked] = useState<ItemType[]>([
    {
      id: 3,
      name: 'sadfasdf',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus laudantium voluptatem culpa sequi molestias nobis repellendus sed ipsum nam suscipit beatae, quidem rerum pariatur dolores numquam voluptates accusantium adipisci.',
    },
    {
      id: 4,
      name: 'mulhg4hg4e',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus laudantium voluptatem culpa sequi molestias nobis repellendus sed ipsum nam suscipit beatae, quidem rerum pariatur dolores numquam voluptates accusantium adipisci.',
    },
    {
      id: 5,
      name: 'asdfdsf',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus laudantium voluptatem culpa sequi molestias nobis repellendus sed ipsum nam suscipit beatae, quidem rerum pariatur dolores numquam voluptates accusantium adipisci.',
    },
    {
      id: 6,
      name: '4123vds',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus laudantium voluptatem culpa sequi molestias nobis repellendus sed ipsum nam suscipit beatae, quidem rerum pariatur dolores numquam voluptates accusantium adipisci.',
    },
    {
      id: 7,
      name: 'bug',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus laudantium voluptatem culpa sequi molestias nobis repellendus sed ipsum nam suscipit beatae, quidem rerum pariatur dolores numquam voluptates accusantium adipisci.',
    },
    {
      id: 8,
      name: 'sadfkj34234',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore recusandae molestiae, repellat soluta fuga assumenda in eos error repellendus, ut iure dolorum consequatur obcaecati dolor sapiente necessitatibus quisquam sit optio suscipit minus ullam! Sequi voluptatem fuga unde praesentium neque quibusdam non temporibus voluptatum iusto nemo et, adipisci tenetur dolores libero possimus beatae amet quisquam optio dignissimos quo cum ipsam reprehenderit, voluptate quasi! Veritatis sunt atque minus architecto unde enim voluptate maxime dicta consectetur qui itaque et rem necessitatibus exercitationem iure minima iusto quas nisi nostrum, laborum nesciunt at optio! Amet tempora illo earum perferendis molestias possimus eius accusantium explicabo ut.',
    },
  ]);

  return (
    <div className={styles.main}>
      <ReactSortable
        list={unranked}
        setList={setUnranked}
        className={styles.listContainer}
        group={{
          name: 'rancor',
          put: true,
        }}
        dragClass={styles.dragged}
        ghostClass={styles.ghost}
        animation={300}
      >
        {unranked.map(item => (
          <Card
            size="small"
            key={item.id}
            className={styles.listItem}
            title={item.name}
            headStyle={{
              color: '#456ffa',
              fontSize: '1.2em',
              borderColor: '#3b4355',
            }}
          >
            <div className={styles.itemDescription}>{item.description}</div>
          </Card>
        ))}
      </ReactSortable>
      <ReactSortable
        list={ranked}
        setList={setRanked}
        className={styles.listContainer}
        group={{
          name: 'rancor',
          put: true,
        }}
        dragClass={styles.dragged}
        ghostClass={styles.ghost}
        animation={300}
      >
        {ranked.map(item => (
          <Card
            size="small"
            key={item.id}
            className={styles.listItem}
            title={item.name}
            headStyle={{
              color: '#456ffa',
              fontSize: '1.2em',
              borderColor: '#3b4355',
            }}
          >
            <div className={styles.itemDescription}>{item.description}</div>
          </Card>
        ))}
      </ReactSortable>
      <div className={styles.listContainer}>Description</div>
    </div>
  );
}
