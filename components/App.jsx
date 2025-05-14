const [selectedGuestId, setSelectedGuestId] = useState(null);

return (
  <div>
    {selectedGuestId ? (
      <GuestDetails id={selectedGuestId} onBack={() => setSelectedGuestId(null)} />
    ) : (
      <GuestList onSelect={setSelectedGuestId} />
    )}
  </div>
);