import {compose} from '@reduxjs/toolkit';
import {SafeAreaView, SectionList} from 'react-native';

const MySectionList = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={[
        {
          title: 'Section 1',
          data: ['Item 1.1', 'Item 1.2', 'Item 1.3'],
        },
        {
          title: 'Section 2',
          data: ['Item 2.1', 'Item 2.2', 'Item 2.3'],
        },
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => String(index)}
    />
  </SafeAreaView>
);
