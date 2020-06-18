import * as React from 'react';
import { View } from 'react-native'

import Album from './Album';

export default function Discography() {
  const albums = [
    {
      'name': 'TREASURE EP.1: All To Zero',
      'releaseDate': 'October 24, 2018',
      'cover': 'treasureep1',
      'spotifyLink': 'https://open.spotify.com/album/4ayTucmOGwLd0WrJddrUwx?si=58P_sHSdSgOPkPHahlq0Ww'
    },
    {
      'name': 'TREASURE EP.2: Zero To One',
      'releaseDate': 'January 15, 2019',
      'cover': 'treasureep2',
      'spotifyLink': 'https://open.spotify.com/album/2PQ8cQ8WzAJJkWYT2Ydmhw?si=FqOM3b0SSOWwpfwdZUaLeQ'
    },
    {
      'name': 'TREASURE EP.3: One To All',
      'releaseDate': 'June 10, 2019',
      'cover': 'treasureep3',
      'spotifyLink': 'https://open.spotify.com/album/4Y8cigF15iNUSV1dhlQqRg?si=UuUFC-YwTmWjMBevRyZtUA'
    },
    {
      'name': 'TREASURE EP.FIN: All To Action',
      'releaseDate': 'October 8, 2019',
      'cover': 'treasureepfin',
      'spotifyLink': 'https://open.spotify.com/album/4HGhzqQEY1X6WWZw6MhjlO?si=bi_P4ee3RyimrWNaq_UiTQ'
    },
    {
      'name': 'TREASURE EP.EXTRA: Shift The Map',
      'releaseDate': 'December 4, 2019',
      'cover': 'treasureepextra',
      'spotifyLink': 'https://open.spotify.com/album/3uejTFamPCZuTD1HvYLqw2?si=Nu9p6pEnRKSZR-5N1yK1vg'
    },
    {
      'name': 'TREASURE EPILOGUE: Action To Answer',
      'releaseDate': 'January 6, 2020',
      'cover': 'treasureepilogue',
      'spotifyLink': 'https://open.spotify.com/album/3TTkDOcSzRQCvGMT7VmmPE?si=ZZT2Jl8WRP-dMu-M0FQoAw'
    },
    {
      'name': 'TREASURE EP. Map To Answer',
      'releaseDate': 'February 12, 2020',
      'cover': 'treasureepmaptoanswer',
      'spotifyLink': 'https://open.spotify.com/album/72uRjP7I54EvufnugN1z8i?si=SysQE08HQ3GNmqwjuK3EJg'
    },
  ]

  return (
    <View>
      {albums.map(album => {
      return <Album key={album.name} name={album.name} release={album.releaseDate} cover={album.cover} spotifyLink={album.spotifyLink}/>
      })}
    </View>
  );
}