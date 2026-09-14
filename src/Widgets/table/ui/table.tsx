import { Anchor, Progress, Table } from '@mantine/core'
import stargazingData from '../../../Shared/api/mockApiData/stargazingData.json'
// import  styles  from '../css/table.module.css'

export function TableReviews() {

  const rows = stargazingData.data.nights.map((row) => {
    // const totalReviews = row.reviews.negative + row.reviews.positive;
    // const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    // const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (

      <Table.Tr key={row.night_of}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.night_of}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.dark_interval.duration_minutes}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.dark_interval.duration_minutes}
          </Anchor>
          <Progress.Root>
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Night</Table.Th>
            <Table.Th>Moonless dark</Table.Th>
            <Table.Th>Window</Table.Th>
            <Table.Th>Quality</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
