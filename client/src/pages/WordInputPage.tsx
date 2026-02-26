function wordInputPage() {
  return (
      <>
        <div>
          <h3>Starter Word</h3>
          <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
        </div>

        <div>
          <h3>Guess Words</h3>

          <div className={"stack"}>
            <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
            <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
            <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
            <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
            <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
            <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
            <input className={"wordInput"} name={"wordInput"} type={"text"} maxLength={5}/>
          </div>

          <button>Lock In</button>
        </div>
      </>
  );
}

export default wordInputPage;
