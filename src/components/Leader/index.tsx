import { SICProfileCard } from '@components/Card';
import leadersAtom from '@state/leaders';
import { useRecoilState } from 'recoil';

const Leader = () => {
  const [leaders] = useRecoilState(leadersAtom);
  return (
    leaders && (
      <div className="grid grid-cols-3 grid-flow-row gap-14">
        {leaders.map((_l, _i) => (
          <div key={_i}>
            <SICProfileCard image={_l.image} name={_l.name} description={_l.description} social={_l.social} />
          </div>
        ))}
      </div>
    )
  );
};

export default Leader;
