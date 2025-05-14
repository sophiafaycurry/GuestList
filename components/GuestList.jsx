const { guests } = useGuests();

return (
  <ul>
    {guests.map(guest => (
      <li key={guest.id} onClick={() => onSelect(guest.id)}>
        {guest.name} - {guest.email}
      </li>
    ))}
  </ul>
);