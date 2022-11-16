import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Table, Row, Rows, Col } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export const ReactionTable = ({ noSettings, headers, items, showSettings, setShowSettings, setActive, rowClick }) => {



  return (
    <View style={styles.container}>
      <DataTable >
        <DataTable.Header style={styles.head}>
          {headers.map((header, index) =>
            <DataTable.Cell style={index == 1 ? styles.statusCell : styles.cell} key={header.id}><Text style={styles.headerCell}>{header.name.toUpperCase()}</Text></DataTable.Cell>
          )}
          {!noSettings && <DataTable.Cell style={styles.settingsCell}></DataTable.Cell>}
        </DataTable.Header>
      </DataTable>
      <ScrollView showsVerticalScrollIndicator={true}>
        <DataTable >
          {items.map((row) =>
            <DataTable.Row onPress={() => rowClick(row.id)} style={styles.row} key={row.id} borderless>
              {headers.map((header, index) =>
                <DataTable.Cell style={index == 1 ? styles.statusCell : styles.cell} key={header.id}>
                  {header.name != 'Status' && <Text style={styles.cellText}>{row[header.accessor]}</Text>}
                  {header.name == 'Status' && <View style={row[header.accessor] == 'Open' ? styles.statusContainerOpen : row[header.accessor] == 'Closed' ? styles.statusContainerClosed : styles.statusContainerDraft}><Text style={row[header.accessor] == 'Open' ? styles.statusOpen : row[header.accessor] == 'Closed' ? styles.statusClosed : styles.statusDraft}>{row[header.accessor]}</Text></View>}
                </DataTable.Cell>
              )}
              {!noSettings && <DataTable.Cell style={styles.settingsCell}><Pressable onPress={() => { setShowSettings(!showSettings); setActive(row); }} title='Create Survey' style={{paddingVertical: 5}}><IonIcons name='cog' color={'#616565'} size={20}></IonIcons></Pressable></DataTable.Cell>}
            </DataTable.Row>
          )}
        </DataTable>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1, borderColor: "#E9E9E9", borderRadius: 5, backgroundColor: '#fff', borderWidth: 3, shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    maxHeight: 600,
    elevation: 9,
  },
  // scrollView: { flex: 1 },
  head: { fontFamily: 'Arial', backgroundColor: '#F9F9F9', borderRadius: 5, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 3, borderColor: "#E9E9E9", paddingLeft: 20, height: 40 },
  row: { paddingLeft: 20, paddingTop: 5 },
  settingsCell: { flex: .5, display: 'flex', flexDirection: 'column', justifyContent: 'center', },
  cell: { flex: 4, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' },
  statusCell: { flex: 2, paddingLeft: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  statusClosed: { fontFamily: 'Gill Sans', paddingHorizontal: 5, color: '#FF5B5B', paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusOpen: { fontFamily: 'Gill Sans', paddingHorizontal: 5, color: '#15BCC7', paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusDraft: { fontFamily: 'Gill Sans', paddingHorizontal: 5, color: '#ED9146', paddingVertical: 5, textAlign: 'center', fontSize: 20 },
  statusContainerOpen: { borderWidth: 2, backgroundColor: '#ECFBFC', borderColor: '#ECFBFC', borderRadius: 5 },
  statusContainerClosed: { borderWidth: 2, backgroundColor: '#FFDDDD', borderColor: '#FFDDDD', borderRadius: 5 },
  statusContainerDraft: { borderWidth: 2, backgroundColor: '#F4E3C2', borderColor: '#F4E3C2', borderRadius: 5 },
  cellText: { fontFamily: 'Gill Sans', fontSize: 20, color: "#616565", paddingBottom: 5 },
  headerCell: { fontSize: 15, fontWeight: 'bold', color: "#616565", fontFamily: 'Gill Sans', },
  rowButton: { borderWidth: 1, width: '100%' }
})