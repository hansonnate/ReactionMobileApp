import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Table, Row, Rows, Col } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export const ReactionTable = ({headers, items, showSettings, setShowSettings, setActive}) => {



  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header style={styles.head}>
          {headers.map((header) =>
            <DataTable.Title style={header.name == 'Status' ? styles.statusCell : styles.cell} key={header.id}><Text style={styles.headerTitle}>{header.name}</Text></DataTable.Title>
          )}
          <DataTable.Title style={styles.settingsCell}></DataTable.Title>
        </DataTable.Header>
      </DataTable>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
        <DataTable>
          {items.map((row) =>
            <DataTable.Row style={styles.row} key={row.id}>
              {headers.map((header) =>
                <DataTable.Cell style={header.name == 'Status' ? styles.statusCell : styles.cell} key={header.id}>
                  {header.name != 'Status' && <Text style={styles.headerTitle}>{row[header.accessor]}</Text>}
                  {header.name == 'Status' && <View style={row[header.accessor] == 'Open' ? styles.statusContainerOpen : row[header.accessor] == 'Closed' ? styles.statusContainerClosed : styles.statusContainerDraft}><Text style={row[header.accessor] == 'Open' ? styles.statusOpen : row[header.accessor] == 'Closed' ? styles.statusClosed : styles.statusDraft}>{row[header.accessor]}</Text></View>}
                </DataTable.Cell>
              )}
              <DataTable.Cell style={styles.settingsCell}><Pressable onPress={() => {setShowSettings(!showSettings); setActive(row);}} title='Create Survey'><IonIcons name='ellipsis-vertical-outline'></IonIcons></Pressable></DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: { flex: 1, borderColor: "#E9E9E9", borderRadius: 5, backgroundColor: '#fff', borderWidth: 3 },
  // scrollView: { flex: 1 },
  head: { backgroundColor: '#E9E9E9', paddingLeft: 20 },
  row: { paddingLeft: 20, paddingTop: 5 },
  settingsCell: { flex: .5, padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' },
  cell: { flex: 4, padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' },
  statusCell: { flex: 2, padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  statusClosed: { fontFamily: 'Poppins-Regular', color: '#FF5B5B', paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusOpen: { fontFamily: 'Poppins-Regular', color: '#15BCC7', paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusDraft: { fontFamily: 'Poppins-Regular', color: '#ED9146', paddingHorizontal: 10, paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusContainerOpen: { borderWidth: 2, backgroundColor: '#ECFBFC', borderColor: '#ECFBFC', borderRadius: 5 },
  statusContainerClosed: { borderWidth: 2, backgroundColor: '#FFDDDD', borderColor: '#FFDDDD', borderRadius: 5 },
  statusContainerDraft: { borderWidth: 2, backgroundColor: '#F4E3C2', borderColor: '#F4E3C2', borderRadius: 5 },
  headerTitle: { fontSize: 20 },
})