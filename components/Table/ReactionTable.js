import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Table, Row, Rows, Col } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export const ReactionTable = ({headers, items, showSettings, setShowSettings, setActive}) => {



  return (
    <View style={styles.container}>
      <DataTable >
        <DataTable.Header style={styles.head}>
          {headers.map((header) =>
            <DataTable.Cell style={header.name == 'Status' ? styles.statusCell : styles.cell} key={header.id}><Text style={styles.headerCell}>{header.name.toUpperCase()}</Text></DataTable.Cell>
          )}
          <DataTable.Cell style={styles.settingsCell}></DataTable.Cell>
        </DataTable.Header>
      </DataTable>
      <ScrollView showsVerticalScrollIndicator={true}>
        <DataTable >
          {items.map((row) =>
            <DataTable.Row style={styles.row} key={row.id}>
              {headers.map((header) =>
                <DataTable.Cell style={header.name == 'Status' ? styles.statusCell : styles.cell} key={header.id}>
                  {header.name != 'Status' && <Text style={styles.cellText}>{row[header.accessor]}</Text>}
                  {header.name == 'Status' && <View style={row[header.accessor] == 'Open' ? styles.statusContainerOpen : row[header.accessor] == 'Closed' ? styles.statusContainerClosed : styles.statusContainerDraft}><Text style={row[header.accessor] == 'Open' ? styles.statusOpen : row[header.accessor] == 'Closed' ? styles.statusClosed : styles.statusDraft}>{row[header.accessor]}</Text></View>}
                </DataTable.Cell>
              )}
              <DataTable.Cell style={styles.settingsCell}><Pressable onPress={() => {setShowSettings(!showSettings); setActive(row);}} title='Create Survey'><IonIcons name='ellipsis-vertical' color={'#616565'} size={20}></IonIcons></Pressable></DataTable.Cell>
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
  head: { backgroundColor: '#F9F9F9', borderBottomWidth: 2, borderColor: "#E9E9E9", paddingLeft: 20, height: 40 },
  row: { paddingLeft: 20, paddingTop: 5, borderBottomWidth: 2, borderColor: "#E9E9E9"},
  settingsCell: { flex: .5, display: 'flex', flexDirection: 'column', justifyContent: 'center'},
  cell: { flex: 4, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'},
  statusCell: { flex: 2, paddingLeft: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 10 },
  statusClosed: { fontFamily: 'Poppins-Regular', paddingHorizontal: 5, color: '#FF5B5B', paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusOpen: { fontFamily: 'Poppins-Regular', paddingHorizontal: 5, color: '#15BCC7', paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusDraft: { fontFamily: 'Poppins-Regular', paddingHorizontal: 5, color: '#ED9146', paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusContainerOpen: { borderWidth: 2, backgroundColor: '#ECFBFC', borderColor: '#ECFBFC', borderRadius: 5 },
  statusContainerClosed: { borderWidth: 2, backgroundColor: '#FFDDDD', borderColor: '#FFDDDD', borderRadius: 5 },
  statusContainerDraft: { borderWidth: 2, backgroundColor: '#F4E3C2', borderColor: '#F4E3C2', borderRadius: 5 },
  cellText: { fontSize: 20, color: "#616565" },
  headerCell: {fontSize: 15, fontWeight: 'bold', color: "#616565" },
})