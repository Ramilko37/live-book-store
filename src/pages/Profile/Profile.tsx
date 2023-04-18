import {Layout} from '../../components/Layout';

export const Profile = () => {
  return (
    <div>
      <div className="profile-info">
        <h2>Ваш профиль</h2>
        <p>Михаил Потапыч</p>
        <div>
          <div>
            <img src="" alt="" />
            <p>Михаил175</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Михаил Потапыч</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>mikhailpotapich@gmail.com</p>
          </div>
        </div>
        <div>
          <button>редактировать</button>
          <button>изменить пароль</button>
        </div>
      </div>
    </div>
  );
};
