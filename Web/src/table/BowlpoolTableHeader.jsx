import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function BowlpoolTableHeader(props) {
  return (
    <thead>
      <tr>
        {!props.hideBowlData && (
          <th className="sticky-top bg-light" id="header">
            Bowl Details
          </th>
        )}
        <th className="sticky-top bg-light" id="header">
          Matchups
        </th>
        {!props.hideBowlData && (
          <th className="sticky-top bg-light" id="header">
            Record
          </th>
        )}
        <th className="sticky-top bg-light" id="header">
          Score
        </th>
        {props.playerData !== [] &&
          props.playerData.map((p, i) => {
            return (
              <th key={i} className="sticky-top bg-light" id="header">
                <div
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Name placeholder"
                >
                  {p.name}
                </div>
              </th>
            );
          })}
      </tr>
    </thead>
  );
}
