import '../card.scss';

export function getStatusAndSpecies(
  status: 'alive' | 'dead' | 'unknown',
  species: string,
) {
  if (status.toLowerCase() === 'alive') {
    return (
      <div className="flex items-center">
        <p className="icon bg-green-400" />
        <p className="status">
          {status} - {species}
        </p>
      </div>
    );
  } else if (status.toLowerCase() === 'unknown') {
    return (
      <div className="flex items-center">
        <p className="icon bg-gray-400" />
        <p className="status">
          {status} - {species}
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <p className="icon bg-red-400" />
      <p className="status">
        {status} - {species}
      </p>
    </div>
  );
}
