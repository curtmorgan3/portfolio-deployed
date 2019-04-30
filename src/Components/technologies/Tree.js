import React from 'react';
import Tree from 'react-d3-tree';
import './stylesheet.css';

const myTreeData = [
  {
    name: 'Curt Morgan',
    children: [
      {
        name: 'Front End',
				children: [
					{
						name: 'HTML5'
					},
					{
						name: 'CSS3',
						children: [
							{name: 'Bootstrap'}, {name: 'Animations'}, {name: 'SASS'}
						]
					},
					{
						name: 'JavaScript (ES6)',
						children: [
							{name: 'Webpack'}, {name: 'DOM'}, {name: 'TypeScript'}, {name: 'React', children: [
								{name: 'Redux'}, {name: 'React Router'}
							]}
						]
					},
				]
      },
      {
        name: 'Back End',
				children: [
					{
						name: 'Node.js',
						children: [
							{name: 'Express'}, {name: 'Socket.io'}, {name: 'JSON Web Tokens'}, {name: 'Sequelize'}, {name: 'OAuth'}
						]
					},
					{
						name: 'Ruby',
						children:[
							{name: 'Rails'}, {name: 'ActiveRecord'}
						]
					},
					{
						name: 'Java'
					}
				]
      },
			{
				name: 'Mobile',
				children: [
					{name: 'React Native'}
				]
			},
			{
				name: 'Desktop',
				children: [
					{name: 'Electron'}, {name: 'Chromium'}
				]
			},
			{
				name: 'Data',
				children: [
					{name: 'PostgreSQL'}, {name: 'MongoDB'}
				]
			}
    ],
  },
];

export default class MyComponent extends React.Component {
  render() {
    return (

      <div className="tree-wrapper">

        <Tree data={myTreeData} initialDepth={1} orientation='vertical' translate={{x:700, y:100}}/>

      </div>
    );
  }
}
