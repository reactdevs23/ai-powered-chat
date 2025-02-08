import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./TextAnimation.module.css";

const TextRevealByWord = ({ text, className, learnMoreLink }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`${classes.container} ${className}`}>
      <div className={classes.stickyContent}>
        <p className={classes.text}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start - 0.1, end]}
              >
                {word}
              </Word>
            );
          })}
          <a
            href={learnMoreLink}
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        </p>
      </div>{" "}
    </div>
  );
};

export default TextRevealByWord;

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);

  return (
    <span className={classes.wordWrapper}>
      <span className={classes.placeholder}>{children}</span>
      <motion.span
        style={{ opacity }}
        className={classes.revealedWord}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
};
