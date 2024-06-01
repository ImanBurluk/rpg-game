import Phaser from 'phaser';
import './style.css';
import { Durotar } from './scenes/durotar';

new Phaser.Game({
	width: 800,
	height: 600,
	title: 'Phaser RPG',
	scene: Durotar,
	url: import.meta.env.URL || '7777',
	version: import.meta.env.VERSION || '0.0.1',
	backgroundColor: '#000',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	pixelArt: true,
});
